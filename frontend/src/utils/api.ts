// frontend/src/utils/api.ts
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

interface ApiResponse<T = any> {
  statusCode: number;
  data: T;
  message: string;
  success: boolean;
}

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  fullName: string;
  email: string;
  password: string;
}

interface User {
  _id: string;
  fullName: string;
  email: string;
  education?: string;
  location?: string;
  skills?: string[];
  interests?: string[];
  isOnboardingComplete: boolean;
  profileScore: number;
}

interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

class ApiService {
  private getAuthHeaders() {
    const token = localStorage.getItem('accessToken');
    return {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    };
  }

  async makeRequest<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: this.getAuthHeaders(),
        credentials: 'include',
        ...options,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      return data;
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }

  // Auth endpoints
  async register(userData: RegisterData): Promise<ApiResponse<User>> {
    return this.makeRequest<User>('/api/v1/users/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async login(credentials: LoginData): Promise<ApiResponse<AuthResponse>> {
    return this.makeRequest<AuthResponse>('/api/v1/users/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async logout(): Promise<ApiResponse<{}>> {
    return this.makeRequest<{}>('/api/v1/users/logout', {
      method: 'POST',
    });
  }

  async getCurrentUser(): Promise<ApiResponse<{ user: User }>> {
    return this.makeRequest<{ user: User }>('/api/v1/users/current-user');
  }

  async refreshToken(): Promise<ApiResponse<AuthResponse>> {
    return this.makeRequest<AuthResponse>('/api/v1/users/refresh-access-token', {
      method: 'POST',
    });
  }

  // Onboarding endpoints
  async updateOnboardingStep(stepData: any): Promise<ApiResponse<{ user: User }>> {
    return this.makeRequest<{ user: User }>('/api/v1/users/onboarding/step', {
      method: 'PATCH',
      body: JSON.stringify(stepData),
    });
  }

  async completeOnboarding(onboardingData: any): Promise<ApiResponse<{ user: User }>> {
    return this.makeRequest<{ user: User }>('/api/v1/users/onboarding/complete', {
      method: 'PATCH',
      body: JSON.stringify(onboardingData),
    });
  }
}

export const apiService = new ApiService();
export type { User, AuthResponse, LoginData, RegisterData };

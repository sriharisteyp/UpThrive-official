import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/auth';
    }
    return Promise.reject(error);
  }
);

// Career Progress Types
export interface IUserCareerProgress {
  id: number;
  user: string;
  career: string;
  career_title: string;
  is_favorite: boolean;
  progress_percentage: number;
  notes: string;
  created_at: string;
  updated_at: string;
}

// Career Management API Functions
export const selectCareer = async (careerId: string): Promise<IUserCareerProgress> => {
  const response = await api.post<IUserCareerProgress>('user-career-progress/', {
    career: careerId,
    is_favorite: false,
    progress_percentage: 0,
    notes: ''
  });
  return response.data;
};

export const updateCareerProgress = async (progressId: number, data: Partial<IUserCareerProgress>): Promise<IUserCareerProgress> => {
  const response = await api.patch<IUserCareerProgress>(`user-career-progress/${progressId}/`, data);
  return response.data;
};

export const getUserCareers = async (): Promise<IUserCareerProgress[]> => {
  const response = await api.get<IUserCareerProgress[]>('user-career-progress/');
  return response.data;
};

export { api };

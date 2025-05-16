export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export interface RegisterProps {
  onClose: () => void;
  onSwitchToLogin: () => void;
}

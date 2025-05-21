import { useState, FormEvent } from 'react';
import axios from 'axios';

interface RegisterProps {
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const Register = ({ onClose, onSwitchToLogin }: RegisterProps) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const response = await axios.post('https://api.ashyo.fullstackdev.uz/auth/register', {
        fullname,
        email,
        password,
      });
      if (response.data) {
        setMessage('Ro‘yxatdan o‘tish muvaffaqiyatli yakunlandi!');
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (error: any) {
      setError(error.response?.data?.message || "Xatolik yuz berdi. Qaytadan urinib ko'ring");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      onSwitchToLogin();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[600px] p-12 relative flex flex-col items-center">
        <button
          onClick={onClose}
          className="absolute top-7 right-7 text-gray-400 hover:text-gray-600 text-3xl"
        >
          ✕
        </button>
        <div className="flex mb-10 mt-2 gap-3 w-full justify-center">
          <button
            className="flex-1 py-4 rounded-[6px] text-xl font-semibold bg-gray-100 text-gray-900 shadow-none focus:outline-none"
            style={{ background: '#f3f4f6' }}
          >
            Ro‘yxatdan o‘tish
          </button>
        </div>
        {message && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-xl text-center text-base w-full max-w-[518px]">
            {message}
          </div>
        )}
        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-xl text-center text-base w-full max-w-[518px]">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-6 w-full">
          <input
            type="text"
            placeholder="To'liq ismingizni kiriting"
            className="rounded-[6px] w-[518px] h-[48px] bg-[#ebeff3] text-[16px] placeholder:text-[16px] border-none px-4 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
            value={fullname}
            onChange={e => setFullname(e.target.value)}
            onKeyDown={handleKeyDown}
            required
            style={{ boxShadow: 'none' }}
          />
          <input
            type="email"
            placeholder="Emailingizni kiriting"
            className="rounded-[6px] w-[518px] h-[48px] bg-[#ebeff3] text-[16px] placeholder:text-[16px] border-none px-4 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            required
            style={{ boxShadow: 'none' }}
          />
          <input
            type="password"
            placeholder="Parol kiriting"
            className="rounded-[6px] w-[518px] h-[48px] bg-[#ebeff3] text-[16px] placeholder:text-[16px] border-none px-4 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            required
            style={{ boxShadow: 'none' }}
          />
          <button
            type="submit"
            className="rounded-[6px] px-[20px] py-[10px] w-[160px] h-[48px] bg-[#134e9b] font-medium text-[16px] text-white mt-4 hover:bg-[#1756b0] transition-colors"
          >
            Ro‘yxatdan o‘tish
          </button>
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="text-[#134e9b] text-sm hover:underline mt-2"
          >
            Login sahifasiga qaytish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register; 
import Image from 'next/image';
import GitHubLogo from '@/media/github-mark-white.svg';

const TopButtons: React.FC = () => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => window.open("https://github.com/simliai/create-simli-agent")}
        className="flex items-center gap-2 px-4 py-2 bg-[#FFB6C1] text-white border border-[#FFB6C1] rounded-full hover:bg-[#FFB6C1]/90 transition-colors shadow-sm hover:shadow-md"
      >
        <Image className="w-[20px]" src={GitHubLogo} alt="GitHub" />
        GitHub
      </button>
      <button
        onClick={() => {
          const email = prompt("Enter your email:");
          if (email) {
            localStorage.setItem('userEmail', email);
            alert('Logged in successfully!');
          }
        }}
        className="flex items-center gap-2 px-4 py-2 bg-[#FFB6C1] text-white border border-[#FFB6C1] rounded-full hover:bg-[#FFB6C1]/90 transition-colors shadow-sm hover:shadow-md"
      >
        Login
      </button>
    </div>
  );
};

export default TopButtons;

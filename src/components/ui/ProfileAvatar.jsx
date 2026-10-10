import { createAvatar } from '@bible-strong/avatar-react';
import '@bible-strong/avatar-react/styles.css';
import { useRef, useEffect, useState } from 'react';

// Import the actual avatar JSON payload
import avatarJson from './avatar.avatar.json';

// Initialize the procedural avatar component with the JSON
const PortfolioAvatar = createAvatar(avatarJson);

export default function ProfileAvatar({ className }) {
  const hoverTimeout = useRef(null);
  const typeInterval = useRef(null);
  
  const [message, setMessage] = useState("");
  const [displayedMessage, setDisplayedMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentAnim, setCurrentAnim] = useState("idle");

  // Smooth typing effect logic
  useEffect(() => {
    if (!message) {
      setDisplayedMessage("");
      setIsTyping(false);
      clearInterval(typeInterval.current);
      return;
    }

    setIsTyping(true);
    setDisplayedMessage("");
    let i = 0;
    
    clearInterval(typeInterval.current);
    typeInterval.current = setInterval(() => {
      setDisplayedMessage(message.substring(0, i + 1));
      i++;
      if (i >= message.length) {
        clearInterval(typeInterval.current);
        setIsTyping(false);
      }
    }, 25); // Typing speed

    return () => clearInterval(typeInterval.current);
  }, [message]);

  useEffect(() => {
    const handleGlobalMouseOver = (e) => {
      const target = e.target;
      const linkOrBtn = target.closest('a') || target.closest('button');
      
      if (linkOrBtn) {
        clearTimeout(hoverTimeout.current);
        setCurrentAnim('curious');
        
        // Extract text to give contextual info
        let text = linkOrBtn.textContent?.replace(/\s+/g, ' ').trim();
        if (text) {
          // Truncate long texts
          if (text.length > 25) text = text.substring(0, 25) + '...';
          setMessage(`Interested in ${text}?`);
        } else {
          setMessage("Click here to explore!");
        }
      }
    };

    const handleGlobalMouseOut = (e) => {
      const target = e.target;
      if (target.closest('a') || target.closest('button')) {
        // Delay the hide to make it feel smoother
        hoverTimeout.current = setTimeout(() => {
          setCurrentAnim('idle');
          setMessage(""); 
        }, 600);
      }
    };

    document.addEventListener('mouseover', handleGlobalMouseOver);
    document.addEventListener('mouseout', handleGlobalMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleGlobalMouseOver);
      document.removeEventListener('mouseout', handleGlobalMouseOut);
      clearTimeout(hoverTimeout.current);
      clearInterval(typeInterval.current);
    };
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout.current);
    setCurrentAnim('excited');
    setMessage("Hi! I'm Nilesh's AI Assistant.");
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setCurrentAnim('idle');
      setMessage("");
    }, 600);
  };

  const handleClick = () => {
    setCurrentAnim('celebrate');
    setMessage("Yay!");
    setTimeout(() => {
      if (!message) setCurrentAnim('idle');
    }, 2000);
  };

  return (
    <div className={`relative flex items-center justify-center cursor-pointer ${className || 'w-full h-full'}`}>
      
      {/* Information Speech Bubble (Smooth & Animated) */}
      <div 
        className={`absolute right-[calc(100%+16px)] top-1/2 -translate-y-1/2 w-auto min-w-[120px] max-w-[200px] sm:max-w-[280px] bg-white text-slate-800 px-4 py-3 rounded-2xl rounded-br-none shadow-xl text-sm font-medium leading-relaxed pointer-events-none transition-all duration-300 origin-bottom-right break-words ${
          message ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 translate-x-4'
        }`}
      >
        {displayedMessage}
        {isTyping && (
          <span className="inline-block w-1.5 h-3.5 ml-1 bg-teal animate-pulse align-middle rounded-full"></span>
        )}
      </div>

      {/* Avatar Container - Clean without bulky backgrounds */}
      <div 
        className="w-full h-full drop-shadow-[0_0_15px_rgba(45,212,191,0.3)] animate-float"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <PortfolioAvatar 
          animation={currentAnim} 
          size="100%" 
        />
      </div>
    </div>
  );
}

import { useState, useRef, useEffect } from "react";
import { FaDownload, FaTimes, FaLock } from "react-icons/fa";
import { colors } from "../../colors";

const resumeUrl =
  "https://drive.google.com/uc?export=download&id=1MIkeZWD4PFYJlXVzSE-REJ6bLLiOFw1b";
const coverLetterUrl =
  "https://drive.google.com/uc?export=download&id=1P_nDTFsUwZrX6YG2kT-2-66hcoXnrH4v";
const password = "Resume!23";

interface PasswordModalProps {
  type: "resume" | "cover";
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

function PasswordModal({
  type,
  isOpen,
  onClose,
  onSuccess,
}: PasswordModalProps) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const passwordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) passwordInputRef.current?.focus();
  }, [isOpen]);

  const handleCheckPassword = () => {
    if (input === password) {
      const url = type === "resume" ? resumeUrl : coverLetterUrl;
      window.open(url, "_blank");
      onSuccess();
      setInput("");
      setError("");
      onClose();
    } else {
      setError("Incorrect password. Please try again.");
      setInput("");
      passwordInputRef.current?.focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleCheckPassword();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      style={{ backgroundColor: colors.background.modal.overlay }}
      onClick={onClose}
    >
      <div
        className="rounded-lg shadow-2xl max-w-md w-full p-6"
        style={{ background: colors.resume.modalBackground }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h3
            className="text-xl font-bold flex items-center gap-2"
            style={{ color: colors.text.title }}
          >
            <FaLock />
            Enter Password to Download
          </h3>
          <button
            onClick={onClose}
            className="transition-colors"
            style={{ color: colors.icon.muted }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = colors.text.subtitle)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = colors.icon.muted)
            }
            aria-label="Close modal"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <p className="text-sm mb-4" style={{ color: colors.text.muted }}>
          This section is intended for companies applying only. Please message
          me to receive the password.
        </p>

        <input
          ref={passwordInputRef}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 mb-4"
          style={{
            borderColor: colors.resume.inputBorder,
            color: colors.text.body,
            background: colors.background.card.default,
          }}
          type="password"
          placeholder="Enter password"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError("");
          }}
          onKeyPress={handleKeyPress}
        />

        {error && (
          <p
            className="text-sm mb-4 p-2 rounded"
            style={{
              color: colors.resume.errorText,
              background: colors.resume.errorBackground,
            }}
          >
            {error}
          </p>
        )}

        <div className="flex gap-3">
          <button
            onClick={handleCheckPassword}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors font-semibold"
            style={{
              background: colors.button.accent.background,
              color: colors.button.accent.text,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = colors.button.accent.backgroundHover;
              e.currentTarget.style.boxShadow = colors.glow.burgundy;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = colors.button.accent.background;
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <FaDownload />
            Submit
          </button>

          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 rounded-lg transition-colors font-semibold"
            style={{
              background: colors.button.secondary.background,
              color: colors.button.secondary.text,
              border: `1px solid ${colors.button.secondary.border}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = colors.button.secondary.backgroundHover;
              e.currentTarget.style.borderColor = colors.button.secondary.borderHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = colors.button.secondary.background;
              e.currentTarget.style.borderColor = colors.button.secondary.border;
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Resume() {
  const [showPasswordPrompt, setShowPasswordPrompt] = useState<
    null | "resume" | "cover"
  >(null);

  return (
    <section
      id="resume"
      className="section-padding"
      style={{ background: colors.background.section.secondary }}
    >
      <div className="container-max">
        <h2
          className="text-4xl sm:text-5xl font-bold text-center mb-4"
          style={{ color: colors.text.title }}
        >
          Resume & <span className="text-gradient">Cover Letter</span>
        </h2>
        <div
          className="w-24 h-1 mx-auto mb-12"
          style={{
            background: colors.gradient.divider,
          }}
        ></div>

        <div className="max-w-3xl mx-auto">
          <p
            className="text-center text-lg mb-10 leading-relaxed"
            style={{ color: colors.text.body }}
          >
            I am Marvin Owera, a Software Developer passionate about building
            efficient, clean, and scalable software solutions. Click the buttons
            below to download my resume and cover letter. This section is
            intended for companies applying only; please message me to receive
            the password.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowPasswordPrompt("resume")}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              style={{
                background: colors.button.primary.background,
                color: colors.button.primary.text,
                boxShadow: colors.glow.soft,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = colors.button.primary.backgroundHover;
                e.currentTarget.style.boxShadow = colors.button.primary.glow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = colors.button.primary.background;
                e.currentTarget.style.boxShadow = colors.glow.soft;
              }}
            >
              <FaDownload />
              Download Resume
            </button>

            <button
              onClick={() => setShowPasswordPrompt("cover")}
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              style={{
                background: colors.button.secondary.background,
                color: colors.button.secondary.text,
                borderColor: colors.button.secondary.border,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = colors.button.secondary.backgroundHover;
                e.currentTarget.style.borderColor = colors.button.secondary.borderHover;
                e.currentTarget.style.boxShadow = colors.glow.soft;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = colors.button.secondary.background;
                e.currentTarget.style.borderColor = colors.button.secondary.border;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <FaDownload />
              Download Cover Letter
            </button>
          </div>
        </div>
      </div>

      <PasswordModal
        type={showPasswordPrompt || "resume"}
        isOpen={showPasswordPrompt !== null}
        onClose={() => setShowPasswordPrompt(null)}
        onSuccess={() => {}}
      />
    </section>
  );
}

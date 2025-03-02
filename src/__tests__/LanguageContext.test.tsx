import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "@jest/globals";
import { useLanguage, LanguageProvider } from "@/contexts/LanguageContext";

const TestComponent = () => {
  const { language, setLanguage } = useLanguage();
  return (
    <div>
      <span data-testid="language">{language}</span>
      <button onClick={() => setLanguage("zh")}>Change to Chinese</button>
    </div>
  );
};

describe("LanguageContext", () => {
  it("provides default language as English", () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );

    expect(screen.getByTestId("language")).toHaveTextContent("en");
  });

  it("allows language switching", async () => {
    const user = userEvent.setup();

    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );

    await user.click(screen.getByText("Change to Chinese"));
    expect(screen.getByTestId("language")).toHaveTextContent("zh");
  });

  it("maintains language state across multiple components", () => {
    const AnotherComponent = () => {
      const { language } = useLanguage();
      return <span data-testid="another-language">{language}</span>;
    };

    render(
      <LanguageProvider>
        <TestComponent />
        <AnotherComponent />
      </LanguageProvider>
    );

    expect(screen.getByTestId("language")).toHaveTextContent("en");
    expect(screen.getByTestId("another-language")).toHaveTextContent("en");
  });

  it("throws error when useLanguage is used outside LanguageProvider", () => {
    // Suppress console.error for this test
    const consoleSpy = jest.spyOn(console, "error");
    consoleSpy.mockImplementation(() => {});

    expect(() => {
      render(<TestComponent />);
    }).toThrow("useLanguage must be used within a LanguageProvider");

    consoleSpy.mockRestore();
  });

  it("allows switching back to English", async () => {
    const EnhancedTestComponent = () => {
      const { language, setLanguage } = useLanguage();
      return (
        <div>
          <span data-testid="language">{language}</span>
          <button onClick={() => setLanguage("zh")}>Change to Chinese</button>
          <button onClick={() => setLanguage("en")}>Change to English</button>
        </div>
      );
    };

    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <EnhancedTestComponent />
      </LanguageProvider>
    );

    // Initial state
    expect(screen.getByTestId("language")).toHaveTextContent("en");

    // Switch to Chinese
    await user.click(screen.getByText("Change to Chinese"));
    expect(screen.getByTestId("language")).toHaveTextContent("zh");

    // Switch back to English
    await user.click(screen.getByText("Change to English"));
    expect(screen.getByTestId("language")).toHaveTextContent("en");
  });
});

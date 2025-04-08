// Пример в автотестировании старницы логина с использованием интерфейса - абстрактного класса - класса

interface ISignInPage {
  fillCredentials({ email, password }: { email: string; password: string }): void;
  clickLogin(): void;
}

abstract class LoginPage implements ISignInPage {
  protected abstract emailInputSelector: string;
  protected abstract passwordInputSelector: string;
  protected abstract loginButtonSelector: string;

  public abstract fillCredentials({ email, password }: { email: string; password: string }): void;
  public abstract clickLogin(): void;
}

class SalesPortalLoginPage extends LoginPage {
  emailInputSelector = "#email";
  passwordInputSelector = "#password";
  loginButtonSelector = "#login";

  public fillCredentials({ email, password }: { email: string; password: string }): void {
    cy.get(this.emailInputSelector).type(email);
    cy.get(this.passwordInputSelector).type(password);
  }

  public clickLogin(): void {
    cy.get(this.loginButtonSelector).click();
  }
}

import { render, screen } from "@testing-library/react";
import App from "./App";

describe('Testes para o App', () => {
    test('Deve renderizar o App corretamente', () => {
        render(<App />);

        expect(screen.getByTestId('post-comment-button')).toBeInTheDocument();
    });
});

import { render,screen } from "@testing-library/react";
import Post from ".";

describe('Testes para o componente Post', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<Post imageUrl="https://via.placeholder.com/100">
            Test
        </Post>)

    expect(screen.getByText('Test')).toBeInTheDocument();
    });
});

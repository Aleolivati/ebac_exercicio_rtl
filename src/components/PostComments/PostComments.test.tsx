import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar dois comentários no componente', () => {
        render(<PostComment />);

        fireEvent.change(screen.getByTestId('post-comment-textarea'), {
            target: {
                value: 'Primeiro comentário',
            }
        });
        fireEvent.click(screen.getByTestId('post-comment-button'));

        fireEvent.change(screen.getByTestId('post-comment-textarea'), {
            target: {
                value: 'Segundo comentário',
            }
        });
        fireEvent.click(screen.getByTestId('post-comment-button'));

        expect(screen.getAllByTestId('post-comment-li')).toHaveLength(2);
        
    })
});
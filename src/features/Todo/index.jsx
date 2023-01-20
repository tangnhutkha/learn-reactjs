import React from 'react';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const todoList = [
        {
            id: 1,
            name: 'Nhạc Hoa thịnh hành',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/5/9/2/159226aaebc0421c28d4921c041dc862.jpg'
        },
        {
            id: 2,
            name: 'Bolero mới nhất',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/0/2/e/702ea6caaaff50200e4c442040a3d3a9.jpg'
        },
        {
            id: 3,
            name: 'Dance Pop',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/b/e/f/8bef699c7bca5f0b8070e6867ca528e5.jpg'
        },

    ]
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList} />
        </div>
    );
}

export default TodoFeature;
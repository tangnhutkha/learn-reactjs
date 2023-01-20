import React from 'react';
// import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
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
            <h3>Danh sách nhạc yêu thích</h3>
            <AlbumList albumList={albumList} />
        </div>
    );
}
export default AlbumFeature;
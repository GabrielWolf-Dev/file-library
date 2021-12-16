import React from 'react';

import { ProfileContainer } from './style.js';
import { TitleBigger } from '../UI';

export default function Profile(){
    return(
        <ProfileContainer>
            <TitleBigger style={{ padding: '48px 0' }}>Perfil</TitleBigger>
        </ProfileContainer>
    );
}
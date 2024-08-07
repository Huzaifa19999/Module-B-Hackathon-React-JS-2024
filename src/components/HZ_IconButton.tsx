import React from 'react';
import { Button } from '@mui/material';

type IconProps = {
    icon: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    label: string;
    color: 'primary' | 'secondary' | 'inherit'; 
    className?: string; 
}

function HZ_IconButton(props:IconProps) {

const { icon, onClick, label, color, className } =  props

    return (
        <Button
            onClick={onClick}
            variant="contained"
            color={color}
            startIcon={icon}
            className={className}
        >
            {label}
        </Button>
    );
}

export default HZ_IconButton;

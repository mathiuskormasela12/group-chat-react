// ========== IBubbleChatProps
// import all modules
import React from 'react';

export interface IBubbleChatProps {
	name: string;
	message: string;
	isLeft: boolean;
	onDoubleClick: React.MouseEventHandler<HTMLDivElement>
}

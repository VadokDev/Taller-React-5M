import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCounter } from './redux/actions/counterActions.js';

function Counter(props) {
	const count = useSelector((store) => store.counterReducer.count);
	const dispatch = useDispatch();

	return (
		<Card>
			<Card.Body>
				<Card.Title>{ count }</Card.Title>
				<Button 
					variant="success"
					onClick={() => dispatch(increaseCounter(1))}
				>
					Aumentar
				</Button>
				<Button 
					variant="danger"
					onClick={() => dispatch(increaseCounter(-1))}
				>
					Disminuir
				</Button>
			</Card.Body>
		</Card>
	);
}

export default Counter;
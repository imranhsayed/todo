import React from 'react';

import  {
	View,
	Text,
	TextInput,
	TouchableOpacity
} from 'react-native';

class Todo extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			todos: [],
			newTodo: '',
		}
	};

	addNum = ( a, b, c ) => {

	};



	handleOnChangeText = ( text ) => {
		this.setState( { newTodo: text } );
	};

	handlePress = ( event ) => {
		this.setState( [...this.state.todos, this.state.newTodo ] );
	};

	render() {

		const { todos, newTodo } = this.state;

		return(
			<View>
				{/*Text Input*/}
				<TextInput
					value={newTodo}
					onChangeText={this.handleOnChangeText}
				/>
				<TouchableOpacity onPress={ this.handlePress }>
					<Text>Create</Text>
				</TouchableOpacity>

				{/*	Todos */}
				{ todos.length ? (
					<View>
						{ todos.map( ( item, index ) => (
							<Text key={ `${item}-${index}` }>
								{ item }
							</Text>
						) ) }
					</View>
				) : false }
			</View>
		)
	}
}

export default Todo;

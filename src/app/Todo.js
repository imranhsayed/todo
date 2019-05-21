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

	handleOnChangeText = ( event ) => {
		this.setState( { newTodo: event.target.value } );
	};

	handlePress = ( event ) => {

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

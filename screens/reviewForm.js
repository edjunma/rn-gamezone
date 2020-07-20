import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';

export default function ReviewForm({ addReview }) {
	return (
		<View style={globalStyles.container}>
			<Formik
				initialValues={{ title: '', body: '', rating: ' ' }}
				onSubmit={(values) => {
					addReview(values);
				}}
			>
				{(props) => (
					<View>
						<TextInput
							style={globalStyles.input}
							placeholder='Review title'
							onChangeText={props.handleChange('title')}
							value={props.value.title}
						/>

						<TextInput
							multiline
							style={globalStyles.input}
							placeholder='Review body'
							onChangeText={props.handleChange('body')}
							value={props.value.body}
						/>

						<TextInput
							multiline
							style={globalStyles.input}
							placeholder='Rating (1-5)'
							onChangeText={props.handleChange('rating')}
							value={props.value.rating}
							keyboardType='numeric'
						/>

						<Button title='submit' color='maroon' onPress={props.handleSubmit} />
					</View>
				)}
			</Formik>
		</View>
	);
}

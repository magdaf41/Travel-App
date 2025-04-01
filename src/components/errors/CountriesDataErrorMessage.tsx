import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import React from 'react'

// Jak rozwiązać problem z typami w obsłudze błędów?

type ApiError =
	| string
	| Error
	| { status: number; data?: { message?: string } }
	| null
	| FetchBaseQueryError
	| SerializedError

type Props = {
	error: ApiError
}

const ErrorMessage: React.FC<Props> = ({ error }) => {
	if (error) {
		let errorMessage: string

		if (typeof error === 'string') {
			errorMessage = error
		} else if (error instanceof Error) {
			errorMessage = error.message
		} else if ('status' in error && error.data) {
			errorMessage = error.data.message || 'An error occurred.'
		} else {
			errorMessage = 'An unknown error occurred.'
		}

		return <p className='text-red-500 text-center'>{errorMessage}</p>
	}

	return null
}

export default ErrorMessage

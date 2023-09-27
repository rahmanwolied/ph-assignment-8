import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './router/router';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Toaster position="bottom-right" />
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);

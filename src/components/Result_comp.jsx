import React, { useEffect } from 'react';


export const Result_comp = ({ result, show }) => {
	console.log("Result.js: ", result);

	console.log(show);


	return (
		<div className="mt-5 p-3">
			{show && <p className="result-text">Testtömeg index:</p>}
			{show && <p className="result">{result}</p>}

		</div>
	)
}

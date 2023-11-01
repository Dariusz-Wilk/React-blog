export const createDateFromView = dateStr => {
	const [day, month, year] = dateStr.split('-');

	return `${month}-${day}-${year}`;
};

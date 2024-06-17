export const truncateLargeText = (str) =>
	str.split(' ').slice(0, 40).join(' ') + '...';

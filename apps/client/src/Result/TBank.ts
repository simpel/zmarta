export type TResponseData = {
	availableBanks: TBank[];
	totalNumOfBanks: number;
};

export type TBank = {
	name: string;
	interrest: number;
};

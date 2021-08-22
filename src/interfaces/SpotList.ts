export interface SpotRecord {
  name: string;
  address: string;
  description: string;
  date: string;
}

export interface SpotList {
  spotRecords: SpotRecord[];
}

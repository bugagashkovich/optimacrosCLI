interface IAuto {
  id?: string;
  status?: string;
  brand: string;
  name: string;
  prodDate: Date;
  price: number;
  oldVersions?: Array<string>;
}

export { IAuto };

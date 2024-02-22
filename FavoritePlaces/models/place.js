class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; //{lat:0.154165, lng:124.4564}
    this.id = new Date().toDateString() + Math.random().toString();
  }
}

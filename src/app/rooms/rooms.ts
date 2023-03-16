export interface Rooms{
    totalRoom: number;
    availableRooms: number;
    bookedRooms: number;
    onholdRooms?: number;
}

export interface RoomsList{
    roomNumber: number;
    roomType: string;
    ammenities: string;
    price: number;
    image: string;
    checkinTime: Date;
    checkoutTime: Date;
    rating: number;
}
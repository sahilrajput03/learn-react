export interface AppointmentsDto {
    appointmentSlots: AppointmentSlot[];
}

export interface AppointmentSlot {
    id: number;
    startTime: string;
    clinicId: number;
    durationInMinutes: number;
    provider: Provider;
}

export interface Clinic {
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
}

export interface Provider {
    id: number;
    name: string;
    credentials?: string;
    language?: string;
    phoneNumber?: string;
}

export interface ClinicsDto {
    clinics: Clinic[];
}

export interface Login {
    username: string;
    password: string;
}

export interface LoginResponse {
    username: string;
    authToken: string;
}

export interface ApiError {
    error: string;
}

const mockAppointmentSlots = [
    {
        id: 1,
        clinicId: 1,
        durationInMinutes: 30,
        provider: {
            id: 1,
            name: "Provider A",
            credentials: "P.A.",
            language: "English, Spanish",
            phoneNumber: "+1 555-555-5555"
        },
        startTime: "2020-02-08 20:30-07:00"
    },
    {
        id: 2,
        clinicId: 1,
        durationInMinutes: 15,
        provider: {
            id: 2,
            name: "Provider B",
            credentials: "M.D.",
            language: "English",
            phoneNumber: "+1 555-555-5555"
        },
        startTime: "2020-02-08 21:00-07:00"
    },
    {
        id: 3,
        clinicId: 2, // does not exist
        durationInMinutes: 30,
        provider: {
            id: 2,
            name: "Provider B",
            credentials: "M.D.",
            language: "English",
            phoneNumber: "+1 555-555-5555"
        },
        startTime: "2020-02-10 10:00-07:00"
    }
]

export { mockAppointmentSlots }

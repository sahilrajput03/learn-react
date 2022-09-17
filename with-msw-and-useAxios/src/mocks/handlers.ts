import {rest} from 'msw'
import {ApiError, AppointmentsDto, Clinic, ClinicsDto, Login, LoginResponse} from "../zoomcare-api";
import {mockClinics} from "./data/clinics";
import {mockAppointmentSlots} from "./data/appointmentSlots";

const mockAuthToken = Math.random().toString(36).slice(2);

export const handlers = [
    rest.get<any, any, AppointmentsDto | ApiError>("/api/appointments", ((req, res, context) => {
        if (!req.headers.get('Authorization')?.includes(mockAuthToken)) {
            return res(context.status(403), context.json({
                error: "Not Authorized"
            }))
        }

        return res(context.status(200), context.json({
            appointmentSlots: mockAppointmentSlots,
        }))
    })),

    rest.get<any, any, ClinicsDto | ApiError>('/api/clinics', ((req, res, context) => {
        if (!req.headers.get('Authorization')?.includes(mockAuthToken)) {
            return res(context.status(403), context.json({
                error: "Not Authorized"
            }))
        }

        return res(context.status(200), context.json({
            clinics: mockClinics
        }))
    })),

    rest.get<any, { clinicId: string; }, Clinic | ApiError>('/api/clinics/:clinicId', ((req, res, context) => {
        if (!req.headers.get('Authorization')?.includes(mockAuthToken)) {
            return res(context.status(403), context.json({
                error: "Not Authorized"
            }))
        }

        const { clinicId } = req.params

        const clinic = mockClinics.find(c => c.id === parseInt(clinicId, 10));
        if (clinic) {
            return res(context.status(200), context.json({...clinic, time: new Date()}))
        } else {
            return res(context.status(404), context.json({
                "error": `No clinic found with id='${clinicId}'`
            }));
        }
    })),

    // consumes and produces "application/json" only
    rest.post<Login, any, LoginResponse>('/api/login', (req, res, ctx) => {
        const { username, password } = req.body
        if (!!username && !!password) {
            sessionStorage.setItem("username", username)
            sessionStorage.setItem("authToken", mockAuthToken)
            return res(
                // Respond with a 200 status code
                ctx.status(200),
                ctx.json({
                    username: username,
                    authToken: mockAuthToken + Math.random()
                })
            )
        } else {
            return res(
                ctx.status(400),
            )
        }
    }),
]

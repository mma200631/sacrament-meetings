'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

import {
  addMeeting,
  updateMeeting as updateMeetingFromDb,
  deleteMeeting as deleteMeetingFromDb,
} from './meetings-db';

const MeetingFormSchema = z.object({
  date: z
    .string()
    .min(1, 'Please select a meeting date.'),

  meetingType: z.enum([
    'testimony',
    'regular',
    'stake',
    'general',
    'special',
  ]),

  presiding: z
    .string()
    .min(1, 'Presiding is required.')
    .max(100, 'Presiding must be 100 characters or less.'),

  conducting: z
    .string()
    .min(1, 'Conducting is required.')
    .max(100, 'Conducting must be 100 characters or less.'),

  announcements: z.string().optional(),

  openingHymn: z.string().min(1, 'Opening hymn is required.'),

  openingPrayer: z
    .string()
    .min(1, 'Opening prayer is required.'),

  wardBusiness: z.string().optional(),

  stakeBusiness: z.enum(['true', 'false']),

  sacramentHymn: z
    .string()
    .min(1, 'Sacrament hymn is required.'),

  speakers: z.string().min(1, 'Please add at least one speaker.'),

  closingHymn: z
    .string()
    .min(1, 'Closing hymn is required.'),

  closingPrayer: z
    .string()
    .min(1, 'Closing prayer is required.'),
});

export type State = {
  message?: string;
  errors?: {
    date?: string[];
    meetingType?: string[];
    presiding?: string[];
    conducting?: string[];
    announcements?: string[];
    openingHymn?: string[];
    openingPrayer?: string[];
    wardBusiness?: string[];
    stakeBusiness?: string[];
    sacramentHymn?: string[];
    speakers?: string[];
    closingHymn?: string[];
    closingPrayer?: string[];
  };
};

function parseJson(value: string, fallback: unknown) {
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

export async function createMeeting(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = MeetingFormSchema.safeParse({
    date: formData.get('date'),
    meetingType: formData.get('meetingType'),
    presiding: formData.get('presiding'),
    conducting: formData.get('conducting'),
    announcements: formData.get('announcements'),
    openingHymn: formData.get('openingHymn'),
    openingPrayer: formData.get('openingPrayer'),
    wardBusiness: formData.get('wardBusiness'),
    stakeBusiness: formData.get('stakeBusiness'),
    sacramentHymn: formData.get('sacramentHymn'),
    speakers: formData.get('speakers'),
    closingHymn: formData.get('closingHymn'),
    closingPrayer: formData.get('closingPrayer'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Please correct the errors below.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const fields = validatedFields.data;

  try {
    await addMeeting({
      date: fields.date,
      meetingType: fields.meetingType,
      presiding: fields.presiding,
      conducting: fields.conducting,
      announcements: fields.announcements
        ? fields.announcements.split('\n').filter(Boolean)
        : [],
      openingHymn: parseJson(fields.openingHymn, {
        number: 0,
        title: '',
      }),
      openingPrayer: fields.openingPrayer,
      wardBusiness: fields.wardBusiness
        ? fields.wardBusiness
            .split('\n')
            .filter(Boolean)
            .map((description) => ({ description }))
        : [],
      stakeBusiness: fields.stakeBusiness === 'true',
      sacramentHymn: parseJson(fields.sacramentHymn, {
        number: 0,
        title: '',
      }),
      speakers: parseJson(fields.speakers, []),
      closingHymn: parseJson(fields.closingHymn, {
        number: 0,
        title: '',
      }),
      closingPrayer: fields.closingPrayer,
    });

  } catch (error) {
    console.error('Failed to create meeting:', error);

    return {
      message: 'Something went wrong while creating the meeting.',
    };
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}

export async function updateMeeting(
  id: number,
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = MeetingFormSchema.safeParse({
    date: formData.get('date'),
    meetingType: formData.get('meetingType'),
    presiding: formData.get('presiding'),
    conducting: formData.get('conducting'),
    announcements: formData.get('announcements'),
    openingHymn: formData.get('openingHymn'),
    openingPrayer: formData.get('openingPrayer'),
    wardBusiness: formData.get('wardBusiness'),
    stakeBusiness: formData.get('stakeBusiness'),
    sacramentHymn: formData.get('sacramentHymn'),
    speakers: formData.get('speakers'),
    closingHymn: formData.get('closingHymn'),
    closingPrayer: formData.get('closingPrayer'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Please correct the errors below.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const fields = validatedFields.data;

  try {
    const updatedMeeting = await updateMeetingFromDb(id, {
      date: fields.date,
      meetingType: fields.meetingType,
      presiding: fields.presiding,
      conducting: fields.conducting,
      announcements: fields.announcements
        ? fields.announcements.split('\n').filter(Boolean)
        : [],
      openingHymn: parseJson(fields.openingHymn, {
        number: 0,
        title: '',
      }),
      openingPrayer: fields.openingPrayer,
      wardBusiness: fields.wardBusiness
        ? fields.wardBusiness
            .split('\n')
            .filter(Boolean)
            .map((description) => ({ description }))
        : [],
      stakeBusiness: fields.stakeBusiness === 'true',
      sacramentHymn: parseJson(fields.sacramentHymn, {
        number: 0,
        title: '',
      }),
      speakers: parseJson(fields.speakers, []),
      closingHymn: parseJson(fields.closingHymn, {
        number: 0,
        title: '',
      }),
      closingPrayer: fields.closingPrayer,
    });

    if (!updatedMeeting) {
      return {
        message: 'Meeting not found.',
      };
    }

  } catch (error) {
    console.error('Failed to update meeting:', error);

    return {
      message: 'Something went wrong while updating the meeting.',
    };
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}

export async function deleteMeeting(
  id: number,
  _formData: FormData
): Promise<void> {
  try {
    const deleted = await deleteMeetingFromDb(id);

    if (!deleted) {
      throw new Error('Meeting not found.');
    }
  } catch (error) {
    console.error('Failed to delete meeting:', error);
    throw new Error('Failed to delete meeting.');
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}
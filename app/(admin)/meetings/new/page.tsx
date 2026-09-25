'use client';

import { useActionState } from 'react';
import { createMeeting, type State } from '@/lib/actions';

const initialState: State = {};

export default function NewMeetingPage() {
  const [state, formAction, isPending] = useActionState(
    createMeeting,
    initialState
  );

  return (
    <section className="max-w-3xl">
      <h1 className="text-3xl font-semibold text-[#26343B]">
        Create Meeting
      </h1>

      <form action={formAction} className="mt-8 space-y-6">
        <div>
          <label htmlFor="date" className="block font-medium">
            Meeting date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            aria-describedby="date-error"
            className="mt-2 w-full rounded-md border p-3"
          />
          <div id="date-error" aria-live="polite" className="mt-1 text-sm text-red-600">
            {state.errors?.date?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="meetingType" className="block font-medium">
            Meeting type
          </label>
          <select
            id="meetingType"
            name="meetingType"
            required
            aria-describedby="meetingType-error"
            className="mt-2 w-full rounded-md border p-3"
            defaultValue=""
          >
            <option value="" disabled>
              Select meeting type
            </option>
            <option value="testimony">Testimony</option>
            <option value="regular">Regular</option>
            <option value="stake">Stake</option>
            <option value="general">General</option>
            <option value="special">Special</option>
          </select>
          <div
            id="meetingType-error"
            aria-live="polite"
            className="mt-1 text-sm text-red-600"
          >
            {state.errors?.meetingType?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="presiding" className="block font-medium">
            Presiding
          </label>
          <input
            id="presiding"
            name="presiding"
            type="text"
            required
            aria-describedby="presiding-error"
            className="mt-2 w-full rounded-md border p-3"
          />
          <div
            id="presiding-error"
            aria-live="polite"
            className="mt-1 text-sm text-red-600"
          >
            {state.errors?.presiding?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="conducting" className="block font-medium">
            Conducting
          </label>
          <input
            id="conducting"
            name="conducting"
            type="text"
            required
            aria-describedby="conducting-error"
            className="mt-2 w-full rounded-md border p-3"
          />
          <div
            id="conducting-error"
            aria-live="polite"
            className="mt-1 text-sm text-red-600"
          >
            {state.errors?.conducting?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="announcements" className="block font-medium">
            Announcements
          </label>
          <textarea
            id="announcements"
            name="announcements"
            rows={3}
            aria-describedby="announcements-error"
            placeholder="One announcement per line"
            className="mt-2 w-full rounded-md border p-3"
          />
          <div
            id="announcements-error"
            aria-live="polite"
            className="mt-1 text-sm text-red-600"
          >
            {state.errors?.announcements?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="openingHymn" className="block font-medium">
            Opening hymn
          </label>
          <input
            id="openingHymn"
            name="openingHymn"
            type="text"
            required
            placeholder='Example: {"number":1,"title":"The Morning Breaks"}'
            aria-describedby="openingHymn-error"
            className="mt-2 w-full rounded-md border p-3"
          />
          <div
            id="openingHymn-error"
            aria-live="polite"
            className="mt-1 text-sm text-red-600"
          >
            {state.errors?.openingHymn?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="openingPrayer" className="block font-medium">
            Opening prayer
          </label>
          <input
            id="openingPrayer"
            name="openingPrayer"
            type="text"
            required
            aria-describedby="openingPrayer-error"
            className="mt-2 w-full rounded-md border p-3"
          />
          <div
            id="openingPrayer-error"
            aria-live="polite"
            className="mt-1 text-sm text-red-600"
          >
            {state.errors?.openingPrayer?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="wardBusiness" className="block font-medium">
            Ward business
          </label>
          <textarea
            id="wardBusiness"
            name="wardBusiness"
            rows={3}
            aria-describedby="wardBusiness-error"
            placeholder="One item per line"
            className="mt-2 w-full rounded-md border p-3"
          />
          <div
            id="wardBusiness-error"
            aria-live="polite"
            className="mt-1 text-sm text-red-600"
          >
            {state.errors?.wardBusiness?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>

        <div>
          <span className="block font-medium">Stake business</span>

          <div className="mt-2 flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="stakeBusiness"
                value="true"
                required
              />
              Yes
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="stakeBusiness" value="false" />
              No
            </label>
          </div>

          <div
            id="stakeBusiness-error"
            aria-live="polite"
            className="mt-1 text-sm text-red-600"
          >
            {state.errors?.stakeBusiness?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="sacramentHymn" className="block font-medium">
            Sacrament hymn
          </label>
          <input
            id="sacramentHymn"
            name="sacramentHymn"
            type="text"
            required
            placeholder='Example: {"number":2,"title":"The Spirit of God"}'
            aria-describedby="sacramentHymn-error"
            className="mt-2 w-full rounded-md border p-3"
          />
          <div
            id="sacramentHymn-error"
            aria-live="polite"
            className="mt-1 text-sm text-red-600"
          >
            {state.errors?.sacramentHymn?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="speakers" className="block font-medium">
            Speakers
          </label>
          <textarea
            id="speakers"
            name="speakers"
            rows={4}
            required
            placeholder='Example: [{"name":"John Doe","topic":"Faith","type":"speaker"}]'
            aria-describedby="speakers-error"
            className="mt-2 w-full rounded-md border p-3"
          />
          <div
            id="speakers-error"
            aria-live="polite"
            className="mt-1 text-sm text-red-600"
          >
            {state.errors?.speakers?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="closingHymn" className="block font-medium">
            Closing hymn
          </label>
          <input
            id="closingHymn"
            name="closingHymn"
            type="text"
            required
            placeholder='Example: {"number":3,"title":"Now Let Us Rejoice"}'
            aria-describedby="closingHymn-error"
            className="mt-2 w-full rounded-md border p-3"
          />
          <div
            id="closingHymn-error"
            aria-live="polite"
            className="mt-1 text-sm text-red-600"
          >
            {state.errors?.closingHymn?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="closingPrayer" className="block font-medium">
            Closing prayer
          </label>
          <input
            id="closingPrayer"
            name="closingPrayer"
            type="text"
            required
            aria-describedby="closingPrayer-error"
            className="mt-2 w-full rounded-md border p-3"
          />
          <div
            id="closingPrayer-error"
            aria-live="polite"
            className="mt-1 text-sm text-red-600"
          >
            {state.errors?.closingPrayer?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>

        {state.message && (
          <p aria-live="polite" className="text-red-600">
            {state.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="rounded-md bg-[#26343B] px-5 py-3 text-white disabled:opacity-50"
        >
          {isPending ? 'Creating...' : 'Create Meeting'}
        </button>
      </form>
    </section>
  );
}
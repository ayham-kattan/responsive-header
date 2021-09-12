import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "963b042dc6fd41678eadb60ded957acd";

const token =
  "006963b042dc6fd41678eadb60ded957acdIACCuQJM69dCZWZt5EmRsgWf9hslgv1GovgJSwTq1xaOVGTNKL8AAAAAEAAQK9JvhIQ/YQEAAQCFhD9h";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName='main' 
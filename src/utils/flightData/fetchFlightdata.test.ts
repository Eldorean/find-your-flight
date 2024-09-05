import { vi } from "vitest";
import fetchFlightData from "./fetchFlightdata";

describe("fetchFlightData", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should fetch flight data successfully", async () => {
    const mockResponse = { flights: undefined };
    vi.spyOn(global, "fetch").mockImplementation(
      vi.fn(() => Promise.resolve(new Response(JSON.stringify(mockResponse), { status: 200 })))
    );

    expect(fetchFlightData()).resolves.toEqual(mockResponse);
  });

  it("should reject with an error message if fetching fails", async () => {
    vi.spyOn(global, "fetch").mockImplementation(
      vi.fn(() => Promise.resolve(new Response(JSON.stringify({}), { status: 404 })))
    );

    expect(fetchFlightData()).rejects.toThrow("Failed to fetch data");
  });
});


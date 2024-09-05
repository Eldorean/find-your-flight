import { vi } from "vitest";
import fetchFlightData from "./fetchFlightdata";

describe("fetchFlightData", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should fetch flight data successfully", async () => {
    const mockResponse = { flights: [] };
    vi.spyOn(global, "fetch").mockResolvedValueOnce(
      new Response(JSON.stringify(mockResponse), { status: 200 })
    );

    fetchFlightData.then((response) => {
      expect(response).toEqual(mockResponse);
    });
  });

  it("should reject with an error message if fetching fails", async () => {
    vi.spyOn(global, "fetch").mockResolvedValueOnce(
      new Response(null, { status: 200 })
    );

    fetchFlightData.catch((response) => {
      expect(response).rejects.toEqual("Failed to fetch data");
    });
  });
});


import { describe, it, expect } from "vitest";
import { getMovieReleaseYearFromString, getHoursFromRuntime } from "../movie";

describe("getMovieReleaseYearFromString", () => {
  it("Returns movie release year from movie date string", () => {
    expect(getMovieReleaseYearFromString("2022-08-11")).toBe("2022");
    expect(getMovieReleaseYearFromString("1990-08-11")).toBe("1990")
  });
});

describe("getHoursFromRuntime", () => {
  it("Returns movie runtime in hours", () => {
    expect(getHoursFromRuntime(32)).toBe("32m");
    expect(getHoursFromRuntime(60)).toBe("1h");
    expect(getHoursFromRuntime(65)).toBe("1h 5m");
    expect(getHoursFromRuntime(232)).toBe("3h 52m")
  });
});

import { describe, expect, it } from "vitest";
import { sendNetworkRequest } from "@src/utils/networkRequest";

describe("networkRequest function without mock", () => {
  it("makes an api call to jsonPlaceholder api", async () => {
    const user = await sendNetworkRequest();
    expect(user.id).toBe(1);
  });
});

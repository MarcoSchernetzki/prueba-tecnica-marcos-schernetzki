import { actionSite } from "./action.types";
import { siteReducer } from "./reducer";

describe("Given the function siteReducer", () => {
    const siteMock = {
        name: "site name",
        id: "2",
    };

    describe("When the action is load", () => {
        test("Then the returned state should be the action payload", () => {
            const action = {
                type: actionSite.load,
                payload: [siteMock],
            };
            const state = [];
            const result = siteReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });
    describe("When the action is add", () => {
        test("Then the returned state should include the action payload", () => {
            const action = {
                type: actionSite.add,
                payload: siteMock,
            };
            const state = [];
            const result = siteReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });
    describe("When the action is update", () => {
        test("Then the returned state should include the action payload", () => {
            const action = {
                type: actionSite.update,
                payload: { ...siteMock, name: "Update name" },
            };
            const state = [siteMock];
            const result = siteReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });
    describe("When the action is update and the id is not valid", () => {
        test("Then the returned state should be the original state", () => {
            const action = {
                type: actionSite.update,
                payload: { ...siteMock, id: 1, name: "Update name" },
            };
            const state = [siteMock];
            const result = siteReducer(state, action);
            expect(result).toEqual(state);
        });
    });
    describe("When the action is delete", () => {
        test("Then the returned state should not include the action payload", () => {
            const action = {
                type: actionSite.delete,
                payload: "2",
            };
            const state = [siteMock];
            const result = siteReducer(state, action);
            expect(result).toEqual([]);
        });
    });

    describe("When the action is delete and the id is not valid", () => {
        test("Then the returned state should should be the original state", () => {
            const action = {
                type: actionSite.delete,
                payload: { ...siteMock, id: 1 },
            };
            const state = [siteMock];
            const result = siteReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe("When the action is any other", () => {
        test("Then the returned state should be ...", () => {
            const action = {
                type: "",
                payload: null,
            };
            const state = [siteMock];
            const result = siteReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUserHandler = exports.createUserHandler = void 0;
const user_service_1 = require("../service/user.service");
function createUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        try {
            // const user = await createUser(body);
            // await sendEmail({
            //   to: user.email,
            //   from: "test@example.com",
            //   subject: "Verify your email",
            //   text: `verification code: ${user.verificationCode}. Id: ${user._id}`,
            // });
            return res.send("User successfully created");
        }
        catch (e) {
            if (e.code === 11000) {
                return res.status(409).send("Account already exists");
            }
            return res.status(500).send(e);
        }
    });
}
exports.createUserHandler = createUserHandler;
function verifyUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const verificationCode = req.params.verificationCode;
        // find the user
        const user = yield (0, user_service_1.find)();
        if (!user) {
            return res.send("Could not verify user");
        }
        // check to see if they are already verified
        if (user.verified) {
            return res.send(user);
        }
        // check to see if the verificationCode matches
        // if (user.verificationCode === verificationCode) {
        //   user.verified = true;
        //   await user.save();
        //   return res.send("User successfully verified");
        // }
        return res.send("Could not verify user");
    });
}
exports.verifyUserHandler = verifyUserHandler;

import mongoose from "mongoose";
import crypto from "crypto";
import bcrypt from "bcrypt";

export type UserDocument = mongoose
  .Document & {
    email: string;
    password: string;
    passwordResetToken: string;
    passwordResetExpires: Date;

    profile: {
      name: string;
      gender: string;
      picture: string;
    }

    comparePassword: comparePasswordFunction;
    gravatar: (size: number) => string;
  };

type comparePasswordFunction =
  (candidatePassword: string, cb: (err:
    any, isMatch: any) => void) => void;

const userSchema = new mongoose.Schema<UserDocument>(
  {
    email: { type: String, unique: true },
    password: String,
    passwordResetToken: String,
    passwordResetExpires: Date,

    profile: { name: String, gender: String, picture: String }
  },
  { timestamps: true }
);


userSchema.pre("save", function save(next) {
  const user = this as UserDocument;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err); }
    bcrypt.hash(user.password, salt, function(
      err: mongoose.Error,
      hash: string) {
      if (err) { return next(err); }
      user.password = hash;
      next();
    })
  })
});

const comparePassword: comparePasswordFunction =
  function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword,
      this.password: string,
      (err: mongoose.Error, isMatch: boolean) => {
        cb(err, isMatch);
      });
  };

userSchema.methods.comparePassword =
  comparePassword;


userSchema.methods.gravatar =
  function(size: number = 200) {
    if (!this.email) {
      return `https://gravatar.com/avatar/?s=${size}%d=retro`;
    }
    const md5 = crypto
      .createHash("md5").update(this.email).digest("hex");
    return `https://gravatar.com/avatar/${md5}?=${size}&d=retro`;
  }

export const User = mongoose.model
  <UserDocument>("User", userSchema);

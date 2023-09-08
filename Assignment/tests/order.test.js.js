const chai = require("chai");
const chaiHttp = require("chai-http");
const express = require("express");
const expect = chai.expect;

chai.use(chaiHttp);
// const app = express()

const app = require("../index"); // Replace with the actual path to your Express app

describe("Order API Tests", () => {
  describe("POST /orders", () => {
    it("should create a new order with valid components", (done) => {
      const orderData = {
        components: ["I", "A", "D", "F", "K"],
      };

      chai
        .request(app)
        .post("/orders")
        .send(orderData)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("order_id");
          expect(res.body).to.have.property("total");
          expect(res.body).to.have.property("parts");
          expect(res.body.parts).to.be.an("array");
          done();
        });
    });

    it("should return an error for an invalid request", (done) => {
      const orderData = {
        components: ["I", "A", "D"],
      };

      chai
        .request(app)
        .post("/orders")
        .send(orderData)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("error");
          done();
        });
    });
  });
});

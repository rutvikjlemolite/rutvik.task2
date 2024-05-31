import Service from "../models/servicesmodel.js";

class ServiceController {
  static createService = async (req, res, next) => {
    try {
      const {
        category,
        serviceName,
        priceOne,
        descOne,
        priceTwo,
        descTwo,
        priceThree,
        descThree,
        desc,
      } = req.body;

      if (
        !category ||
        !serviceName ||
        !priceOne ||
        !descOne ||
        !priceTwo ||
        !descTwo ||
        !priceThree ||
        !descThree ||
        !desc
      ) {
        return res.json({ msg: "all required fields", status:false });
      }

      const serviceCheck = await Service.findOne({ serviceName });

      if (serviceCheck) {
        return res.json({
          msg: "services has already been listed",
          status: false,
        });
      }

      if (priceOne <= 0 || priceTwo <= 0 || priceThree <= 0) {
        return res.json({ msg: "Enter valid values for price", status: false });
      }

      const service = await Service.create({
        category,
        serviceName,
        priceOne,
        descOne,
        priceTwo,
        descTwo,
        priceThree,
        descThree,
        desc,
      });

      return res.json({
        msg: "Services listed successfully",
        status: true,
        service,
      });
    } catch (error) {
      console.error("Error creating service:", error);
      next(error);
    }
  };

  static getOneService = async (req, res, next) => {
    try {
      const id = req.params.id;
      const serviceExist = await Service.findById(id);
      if (!serviceExist) {
        return res.status(404).json({ msg: "services not found" });
      }

      res.status(200).json(serviceExist);
    } catch (error) {
      next(error);
    }
  };

  static getAllService = async (req, res, next) => {
    try {
      const service = await Service.find(req.params.id).select([
        "category",
        "serviceName",
        "desc",
        "priceOne",
        "descOne",
        "priceTwo",
        "descTwo",
        "priceThree",
        "descThree",
      ]);

      return res.json(service);

    } catch (error) {
      
      console.log("Error" , error)

    }
  };

  static deleteService = async (req, res, next) => {
    try {
      const id = req.params.id;
      const service = await Service.findById(id);

      if (service) {
        await Service.findByIdAndDelete(id);
        return res.json({
          msg: "service deleted successfully",
          status: true,
        });
      } else {
        return res.json({ msg: "service not found", status: false });
      }
    } catch (error) {
      next(error);
    }
  };

  static updateService = async (req, res, next) => {
    try {
      const id = req.params.id;
      const service = await Service.findById(id);
      if (!service) {
        return res.json({ msg: "service not found", status: false });
      }

      const updatedData = await Service.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      return res.json({
        msg: "service Updated successfully",
        status: true,
        updatedData,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default ServiceController;

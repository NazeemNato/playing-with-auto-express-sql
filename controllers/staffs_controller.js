const db = require("../models");
const initModels = require("../models/init-models");

const model = initModels(db.sequelize);

exports.get_all = async (req, res) => {
  try {
    const emp = await model.employees.findAll({
      limit: 10,
      include: [
        {
          model: model.salaries,
          attributes: ["salary", "from_date", "to_date"],
          as: "salaries",
        },
        {
          model: model.titles,
          as: "titles",
          attributes: ["title", "from_date", "to_date"],
        },
      ],
    });
    return res.send(emp);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

exports.manager = async (req, res) => {
  try {
    const department = await model.dept_manager.findAll({
      include: {
        model: model.employees,
        attributes: ["first_name", "last_name"],
        as: "emp_no_employee",
      },
    });
    return res.send(department);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

import { Button, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ExerciseTable from "./table";

function Upload() {
  const fileReader = new FileReader();
  const [file, setFile] = useState();
  const [rowData, setRowData] = useState([]);
  const [csvHeader, setCsvHeader] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [validationSuccess, setValidationSuccess] = useState(true);

  useEffect(() => {
    if (validationSuccess) {
      const parsedRowData = rowData.map((i) => {
        const values = i.split(",");
        values[values.length - 1] = values[values.length - 1].replace("\r", "");
        const obj = csvHeader.reduce((object, header, index) => {
          object[header] = values[index];
          return object;
        }, {});
        return obj;
      });
      setTableData(parsedRowData);
    }
  }, [rowData, validationSuccess]);

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.readAsText(file);
      fileReader.onload = function (event) {
        const text = event.target.result;
        validateCsvData(text);
      };
    }
  };

  const validateCsvData = (text) => {
    const csvHeader = text.slice(0, text.indexOf("\n")).split(",");
    csvHeader[csvHeader.length - 1] = csvHeader[csvHeader.length - 1].replace(
      "\r",
      "",
    );
    setCsvHeader(csvHeader);
    const csvRows = text.slice(text.indexOf("\n") + 1).split("\n");

    const rowDataWithoutComments = csvRows.filter(function (value) {
      return value.charAt(0) != "#";
    });

    setRowData(rowDataWithoutComments);

    for (let i = 0; i < rowDataWithoutComments.length; i++) {
      const values = rowDataWithoutComments[i].split(",");
      console.log("number of iterations");
      if (values.length != csvHeader.length) {
        setValidationSuccess(false);
        break;
      }
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Heading>CSV IMPORT</Heading>
      <form>
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnChange}
        />

        <Button
          onClick={(e) => {
            handleOnSubmit(e);
          }}
          colorScheme="blue"
        >
          IMPORT CSV
        </Button>
      </form>

      <br />
      <Flex p="3%" flexDir={"column"}>
        {validationSuccess === false && <Heading>Unsuccessful Upload.</Heading>}
        {/* {error === "no" && } */}
        <ExerciseTable exerciseDay={"Push"} rowData={tableData}></ExerciseTable>
      </Flex>
    </div>
  );
}

export default Upload;

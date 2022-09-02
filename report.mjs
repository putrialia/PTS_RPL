import process from "process";

process.report.repotrOnFatalError = true;
process.report.repotrOnUncaughtException = true;
process.report.reportOnSignal = true;
process.report.filename = "report.json";

function sampleError() {
    throw new Error("Ups");
}

sampleError();
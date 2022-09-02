import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnUncaughtException = true;
process.report.reportOnSignal = true;
process.report.filename = "reportt.json";

function sampleError(){
    throw new Error("ups");
}
sampleError();
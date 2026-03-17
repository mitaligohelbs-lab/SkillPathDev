import { Delete } from "lucide-react";
import { Box } from "@mui/material";
import { ModalHeaderTypes } from "../types/ModalTypes";

const ModalHeader = ({
  icon,
  modalHeader,
  subTitle,
  handleClose,
}: ModalHeaderTypes) => (
  <Box className="flex justify-between">
    <div>
      <Box className="text-xl font-semibold flex items-center gap-2">
        {icon}
        {modalHeader}
      </Box>
      <p className="text-[#707d8f] text-sm">{subTitle}</p>
    </div>

    <Delete onClick={handleClose} />
  </Box>
);

export default ModalHeader;

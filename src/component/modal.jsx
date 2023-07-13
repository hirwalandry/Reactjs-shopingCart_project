import React, {
  useState,
  useContext,
  cloneElement,
  createContext,
} from "react";
import { ModalDialog } from "react-bootstrap";
import { ModalTitle } from "react-bootstrap";

const callAll =
  (...fns) =>
  (...args) =>
    fns.forEach((fn) => fn && fn(...args));

const ModalContext = createContext();

function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);
  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />;
}

function ModalDismissButton({ children: child }) {
  const [, setIsOpen] = useContext(ModalContext);

  return cloneElement(child, {
    onClick: callAll(() => setIsOpen(false), child.props.onClick),
  });
}

export function ModalDismissAsyncButton({ children: child }) {
  const [, setIsOpen] = React.useContext(ModalContext);
  return React.cloneElement(child, {
    onClick: callAll(() =>
      child.props
        .onClick()
        .then((res) => (res === "success" ? setIsOpen(false) : null))
    ),
  });
}

function ModalOpenButton({ children: child }) {
  const [, setIsOpen] = useContext(ModalContext);

  return cloneElement(child, {
    onClick: callAll(() => setIsOpen(true), child.props.onClick),
  });
}

function ModalContentsBase(props) {
  const [isOpen, setIsOpen] = useContext(ModalContext);
  return (
    <ModalDialog open={isOpen} onClose={() => setIsOpen(false)} {...props}>
      {props.children}
    </ModalDialog>
  );
}

function ModalContents({ title, children, ...props }) {
  return (
    <ModalContentsBase {...props}>
      <div style={{ padding: "20px" }}>
        <div css={{ display: "flex", justifyContent: "flex-end" }}>
          <ModalDismissButton>
            <i
              style={{
                position: "absolute",
                top: "4px",
                right: "10px",
                cursor: "pointer",
                fontSize: "24px",
                fontFamily: "sans-serif",
                fontStyle: "normal",
              }}
            >
              x
            </i>
          </ModalDismissButton>
        </div>
        <ModalTitle>{title}</ModalTitle>
        {children}
      </div>
    </ModalContentsBase>
  );
}

export { Modal, ModalDismissButton, ModalOpenButton, ModalContents };
